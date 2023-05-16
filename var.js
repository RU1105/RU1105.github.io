var reservationCount = 87; // 初始化預約人數
var nowreservationCount = 10;

function increaseCount() {
	reservationCount++; // 增加計數器
    console.log(reservationCount); // 在控制台中顯示計數器的值
}
setInterval(increaseCount, 2500);

function increaseReservationCount() {
	reservationCount++; // 增加預約人數
	document.getElementById("reservation-count").textContent = reservationCount; // 更新預約人數的元素內容
}

function nowReservationCount() {
	nowreservationCount++; // 增加預約人數
	document.getElementById("nowreservation-count").textContent = nowreservationCount; // 更新目前預約人數的元素內容
}
setInterval(nowReservationCount, 4000);

function showQRCode() {
	document.getElementById('image-container').src = "images/qr-code.png";
}
