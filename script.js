// 安全的DOM元素获取函数
function safeGetElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id "${id}" not found`);
        return null;
    }
    return element;
}

function safeGetElementsByClassName(className) {
    const elements = document.getElementsByClassName(className);
    if (elements.length === 0) {
        console.warn(`No elements with class "${className}" found`);
        return null;
    }
    return elements;
}

// 模态框功能（如果存在相关元素）
function initializeModal() {
    const modal = safeGetElementById("modal");
    const btn = safeGetElementById("subscribe-btn");
    const closeElements = safeGetElementsByClassName("close");
    const submitEmail = safeGetElementById("submit-email");
    const emailInput = safeGetElementById("email");

    // 只有当所有必要元素都存在时才初始化模态框
    if (modal && btn && closeElements && closeElements[0]) {
        // 打开模态框
        btn.onclick = function() {
            modal.style.display = "block";
        };

        // 关闭模态框
        closeElements[0].onclick = function() {
            modal.style.display = "none";
        };

        // 点击模态框外部关闭
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };

        // 处理邮箱提交
        if (submitEmail && emailInput) {
            submitEmail.addEventListener("click", function() {
                const email = emailInput.value;
                if (email) {
                    alert("Thank you for subscribing! We'll send updates to: " + email);
                    modal.style.display = "none";
                } else {
                    alert("Please enter a valid email address.");
                }
            });
        }
    }
}

// 平滑滚动功能
function initializeSmoothScroll() {
    const homeLinks = document.querySelectorAll('a[href="index.html"]');
    
    homeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果当前已经在首页，则平滑滚动到顶部
            if (window.location.pathname.endsWith('index.html') || 
                window.location.pathname.endsWith('/') || 
                window.location.pathname === '') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initializeModal();
    initializeSmoothScroll();
    
    console.log('JavaScript initialized successfully');
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});
