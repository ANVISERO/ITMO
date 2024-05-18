import com.ANVISERO.Utils;
import com.ANVISERO.model.MainPage;
import com.ANVISERO.model.PersonalAccountPage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PersonalAccountTest {
    public static final String SEO_XPATH = "//span[@onclick=\"evtTrackChoseTool('Поисковое продвижение SEO'); ItemPreCreate.save_step('item_type', {'item_type':'SEO'})\"]";
    public static final String SITE_URL = "https://lab1.com";
    public static final String SITE_NAME = "lab1";

    @BeforeAll
    public static void setUp() {
        Utils.prepareDrivers();
    }

    @Test
    @DisplayName("AddSiteSeoTest")
    void AddSiteSeoTest() {
        List<WebDriver> drivers = Utils.getDrivers();
        drivers.parallelStream().forEach(webDriver -> {
            MainPage mainPage = new MainPage(webDriver);
            PersonalAccountPage personalAccountPage = new PersonalAccountPage(webDriver);
            webDriver.get(Utils.BASE_URL);
            mainPage.doLogin();
            Utils.waitUntilPageLoads(webDriver, 4);
            personalAccountPage.addSite(SITE_URL, SITE_NAME, SEO_XPATH);
            WebElement profileButton = Utils.getElementBySelector(webDriver, By.xpath("//a[contains(text(),'Профиль проекта')]"));
            profileButton.click();
            WebElement siteUrl = Utils.getElementBySelector(webDriver, By.xpath("//div[@id='addsite-wrapper']/div/div[3]/table/tbody/tr[3]/td[2]/input"));
            assertEquals(SITE_URL, siteUrl.getAttribute("value"));
        });
        drivers.forEach(WebDriver::quit);
    }
}
