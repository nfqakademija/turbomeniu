<?php


class SearchResultCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/');
        $I->see('TURBOMENIU');
    }

    public function _after(AcceptanceTester $I)
    {
    }

    // tests

    /**
     * @param AcceptanceTester $I
     * @throws Exception
     */
    public function tryToTest(AcceptanceTester $I)
    {
        $I->am('New user');
        $searchText = 'Burger';
        $I->fillField('.searchbar', $searchText);
        $I->click('.searchbutton');

        $I->waitForElement('.listing');
        $I->wait(60);
        $I->dontSee('Sorry your filter did not match any listing');
        $I->canSee('Burger', '.foodFromMenu');
    }
}
