Code for Ionic 2 bug report: https://github.com/driftyco/ionic/issues/10675

**Steps to reproduce:**

1. Clone repo and run 
```
npm install
```
2. Start up server with
```
ionic serve
```
3. Open page on a mobile phone (this issue is easier to see on an iOS device because of the rubber band scrolling)

4. Fling the Home page content

5. While the Home page content is still scrolling, tap either the "About" or "Contact" tabs. The scrolling will stop, but the tab will not switch

6. Optionally, you can set fullscreen="false" in src/pages/home/home.html and try again to see the expected result when tapping a tab.
