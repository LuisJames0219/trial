const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

function toggleSidebar() {
    sidebar.classList.toggle('sidebar-hidden');
    content.classList.toggle('content-full-width');
}