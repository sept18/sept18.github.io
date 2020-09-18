donGia.textContent = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(500000)
    // fSet = document.getElementsByTagName('fieldset')[0]
function tinh() {
    soLuong = document.getElementById('soLuong').value
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
}