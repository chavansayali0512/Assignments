
function showTab(tabId) {
    // Hide all tab content
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Remove active class from all tabs
    var tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(function(tabButton) {
        tabButton.classList.remove('active');
    });

    // Show the selected tab content and make the tab active
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
