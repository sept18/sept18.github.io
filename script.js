donGia.textContent = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(500000)
sl = document.getElementById('soLuong')
soLuong = sl.value;
btn = document.getElementById('btn')

function toggleBtn(soLuong) {
    if (soLuong != 0) btn.style.display = 'block'
    else btn.style.display = 'none'
}
toggleBtn(soLuong)

function tinh() {
    let soLuong = sl.value;
    // donGia = document.getElementById('donGia').value
    giamGia = document.getElementById('giamGia').value
    if (soLuong > 25) giamGia = 20
    else if (soLuong <= 25 && soLuong > 15) giamGia = 10
    else if (soLuong <= 15 && soLuong > 10) giamGia = 5
    else if (soLuong <= 10 && soLuong > 5) giamGia = 2
    else giamGia = 0
    document.getElementById('giamGia').value = giamGia
    tien = soLuong * 500000 * (100 - giamGia) / 100
    ts = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tien)
    khach.style.textTransform = tenKhach.style.textTransform = 'capitalize'
    tenKhach.innerHTML = khach.value
    document.getElementById('tien').innerHTML = `${ts} của khách `
    toggleBtn(soLuong)
}
ani = document.getElementById('ani')
rotate = document.getElementById('rotate')
window.onload = function() {
    ani.style.position = 'relative'
    ani.style.left = '0px'
    lg.innerHTML = 'Pocket calculator'
}

function onCopy() {
    document.getElementById('talk').textContent = 'Small text, type it by urself'
}
i = 0

function onKeyPress() {
    ani.style.left = parseInt(ani.style.left) + 10 + 'px'
    rotate.style.transform = 'rotate(' + i + 'deg)'
    i += 70
}