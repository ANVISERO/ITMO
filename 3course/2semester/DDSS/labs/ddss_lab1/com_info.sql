-- Получение статистики о текущих подключениях
SELECT COUNT(*)
FROM pg_stat_activity;

-- Получение ниформации о базах даннных
SELECT *
FROM pg_database;

-- Получение таблицы для схем (структура бд)
SELECT *
FROM pg_namespace;

SELECT *
FROM pg_index;

-- Хранит описание таблиц, представлений, индексов, последовательностей (все эти объекты называются отношением)
-- r - relatioin (таблица), i - индекс, v - представление
SELECT relname, relkind, relnamespace, relfilenode, relowner, reltablespace
FROM pg_class;

-- Хранит описание таблиц, представлений, индексов
SELECT *
FROM pg_class;

-- Представление pg_class, которое из pg_class выбирает только информацию о таблицах
-- и вместо идентификаторов мы можем уже увидеть конкретные имена
SELECT *
FROM pg_tables;

-- Аналогично предыдущему, табица для представлений
SELECT *
FROM pg_views;

-- Каталог с информацией о колонках таблицы (описание столбцов)
SELECT *
FROM pg_attribute;
-- attnum - номер колонки
-- attnum - номер колонки

--  pg_catalog - схема для объектов системного каталога

-- information_schema
-- альтернативный взгляд на системный каталог
-- определена стандартом SQL
-- стабильна, но не содержит специфики PostgreSQL
-- по умолчанию не входит в путь поиска

SELECT *
FROM pg_constraint c
JOIN pg_catalog.pg_namespace n on c.connamespace = n.oid;

SELECT pg_description.description
FROM pg_description
         JOIN pg_attribute ON pg_description.objoid = pg_attribute.attrelid;


-- Получение списка столбцов по имени таблицы (attnum > 0 отвечает за то, чтобы мы видели только созданные нами столбцы)
SELECT a.attname, a.atttypid::regtype
FROM pg_attribute AS a
WHERE a.attrelid = 'Н_ЛЮДИ'::regclass
  AND a.attnum > 0;
