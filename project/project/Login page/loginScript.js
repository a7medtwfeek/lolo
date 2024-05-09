document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // يمكنك تنفيذ التحقق من اسم المستخدم وكلمة المرور هنا.
    // لهذا المثال، سأستخدم اسم المستخدم "admin" وكلمة المرور "password" للتأكد من صحة المعلومات.

    if (username === 'admin' && password === 'pass') {
        // إذا كان اسم المستخدم وكلمة المرور صحيحة، يتم تحويل المستخدم إلى صفحة معينة.
        window.location.href = "../home/index.html";    } else {
        // إذا كان اسم المستخدم أو كلمة المرور خاطئة، يتم عرض رسالة خطأ.
        document.getElementById('errorMessage').innerText = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
    }
});

