package com.ANVISERO.model;

import com.ANVISERO.Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class PersonalAccountPage {
    private WebDriver driver;

    public PersonalAccountPage(WebDriver driver) {
        this.driver = driver;
    }

    public void addSite(String siteName, String projectName, String xpath) {
        WebElement createProjectButton = Utils.getElementBySelector(driver, By.xpath("//input[@name='add']"));
        createProjectButton.click();
        WebElement chooseButton = Utils.getElementBySelector(driver, By.xpath(xpath));
        chooseButton.click();
        WebElement siteNameInput = Utils.getElementBySelector(driver, By.xpath("//input[@id='url']"));
        WebElement projectNameInput = Utils.getElementBySelector(driver, By.xpath("//input[@id='field-item_name']"));
        WebElement submitButton = Utils.getElementBySelector(driver, By.xpath("//span[@onclick=\"mixpanel.track('Нажатие на кнопку Создать проект'); ItemPreCreate.save_step('settings')\"]"));
        siteNameInput.clear();
        projectNameInput.clear();
        siteNameInput.sendKeys(siteName);
        projectNameInput.sendKeys(projectName);
        try {
            Thread.sleep(5000); // Ожидание 5 секунд
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        submitButton.click();
    }
}
