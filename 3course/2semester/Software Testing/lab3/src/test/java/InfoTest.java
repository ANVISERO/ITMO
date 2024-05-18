import com.ANVISERO.Utils;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class InfoTest {
    private static final String OPPORTUNITIES = "https://promopult.ru/technology";
    private static final String OPPORTUNITIES_SEO = "https://promopult.ru/technology/seo";
    private static final String OPPORTUNITIES_PPC = "https://promopult.ru/technology/ppc";
    private static final String OPPORTUNITIES_SOCIAL = "https://promopult.ru/technology/social";
    private static final String OPPORTUNITIES_WILDBERRIES = "https://promopult.ru/technology/wildberries";
    private static final String EDUCATION = "https://promopult.ru/education.html";
    private static final String BLOG = "https://promopult.ru/education.html#blog";

    @BeforeAll
    public static void setUp() {
        Utils.prepareDrivers();
    }

    @Test
    @DisplayName("searchOpportunitiesInfo")
    void searchOpportunitiesInfo() {
        List<WebDriver> drivers = Utils.getDrivers();
        drivers.parallelStream().forEach(webDriver -> {
            webDriver.get(Utils.BASE_URL);
            WebElement opportunitiesButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='header-navigation-wrapper']/div/nav/ul/li/div/a/span"));
            opportunitiesButton.click();
            String currentUrl = webDriver.getCurrentUrl();
            assertEquals(OPPORTUNITIES, currentUrl);
            WebElement seoButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='uslugi-menu']/div/a/span[2]"));
            seoButton.click();
            currentUrl = webDriver.getCurrentUrl();
            assertEquals(OPPORTUNITIES_SEO, currentUrl);
            WebElement ppcButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='uslugi-menu']/div/a[2]/span[2]"));
            ppcButton.click();
            currentUrl = webDriver.getCurrentUrl();
            assertEquals(OPPORTUNITIES_PPC, currentUrl);
            WebElement socialButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='uslugi-menu']/div/a[3]"));
            socialButton.click();
            currentUrl = webDriver.getCurrentUrl();
            assertEquals(OPPORTUNITIES_SOCIAL, currentUrl);
            WebElement wildberriesButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='uslugi-menu']/div/a[4]/span[2]"));
            wildberriesButton.click();
            currentUrl = webDriver.getCurrentUrl();
            assertEquals(OPPORTUNITIES_WILDBERRIES, currentUrl);
        });
        drivers.forEach(WebDriver::quit);
    }

    @Test
    @DisplayName("searchEducationInfo")
    void searchEducationInfo() {
        List<WebDriver> drivers = Utils.getDrivers();
        drivers.parallelStream().forEach(webDriver -> {
            webDriver.get(Utils.BASE_URL);
            WebElement educationButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='header-navigation-wrapper']/div/nav/ul/li[2]/div/a/span"));
            educationButton.click();
            String currentUrl = webDriver.getCurrentUrl();
            assertEquals(EDUCATION, currentUrl);
            WebElement title = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='headline-visible']/div/h1"));
            assertEquals("Обучение интернет-маркетингу для наших клиентов", title.getText());
            WebElement coursesButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='sp_main_tbl']/div[3]/div/div/div"));
            coursesButton.click();
            title = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='headline-visible']/div[2]/div/ul/li[1]/a/div/div[2]"));
            assertEquals("Офлайн-курсы и вебинары", title.getText());
            WebElement videoButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='sp_main_tbl']/div[6]"));
            videoButton.click();
            title = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='headline-visible']/div[2]/div/ul/li[2]/a/div/div[2]"));
            assertEquals("Обучающие видео", title.getText());
            WebElement blogTitleButton = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='headline-visible']/div[2]/div/ul/li[4]/a/div/div[2]"));
            blogTitleButton.click();
            WebElement blogButton = Utils.getElementBySelector(webDriver, By.xpath("//a[contains(text(),'Перейти в блог')]"));
            ((JavascriptExecutor) webDriver).executeScript("arguments[0].click();", blogButton);
            currentUrl = webDriver.getCurrentUrl();
            assertEquals(BLOG, currentUrl);
        });
        drivers.forEach(WebDriver::quit);
    }
}