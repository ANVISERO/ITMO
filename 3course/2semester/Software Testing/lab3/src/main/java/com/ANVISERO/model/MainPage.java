package com.ANVISERO.model;

import com.ANVISERO.Utils;
import lombok.Getter;
import lombok.Setter;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

@Getter
@Setter
public class MainPage {
    private WebDriver driver;

    public MainPage(WebDriver driver) {
        this.driver = driver;
    }

    public void doLogin() {
        tryLogin(Utils.CORRECT_LOGIN, Utils.CORRECT_PASSWORD);
    }

    public void doIncorrectLogin() {
        tryLogin(Utils.CORRECT_LOGIN, Utils.WRONG_PASSWORD);
    }

    public void doLogout() {
        WebElement panelButton = Utils.getElementBySelector(driver, By.xpath("//div[@id='right-top-menu-uname']"));
        panelButton.click();
        WebElement logoutButton = Utils.getElementBySelector(driver, By.xpath("//div[@id='rm-dd-user']/div[2]/div[7]/a/span"));
        logoutButton.click();
    }


    private void tryLogin(String login, String password) {
        WebElement loginButton = Utils.getElementBySelector(driver, By.xpath("//header[@id='top-panel']/div/div/div/div[3]/div/ul/li/a/span"));
        loginButton.click();
        WebElement loginInput = Utils.getElementBySelector(driver, By.xpath("//input[@id='login-uname']"));
        WebElement loginPassword = Utils.getElementBySelector(driver, By.xpath("//input[@id='login-pass']"));
        WebElement submitButton = Utils.getElementBySelector(driver, By.xpath("//form[@id='rtm-login-form']/div[3]/input"));
        loginInput.clear();
        loginPassword.clear();
        loginInput.sendKeys(login);
        loginPassword.sendKeys(password);
        submitButton.click();
    }
}
