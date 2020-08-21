<html>
<head>
<title>Форма заявки с сайта</title>
</head>
<body>
<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['phone'])){
 ?> <form action="send.php" method="post">
<input type="text" name="name" class="input input__name" placeholder="Your name" required>
<input type="tel" name="phone" class="input input__phone" placeholder="Your phone" required>
<button type="submit" class="button form__button">Free consultation</button>
</form> <?php
} else {
 //показываем форму
 $name = $_POST['name'];
 $phone = $_POST['phone'];
 $name = htmlspecialchars($name);
 $phone = htmlspecialchars($phone);
 $name = urldecode($name);
 $phone = urldecode($phone);
 $name = trim($name);
 $phone = trim($phone);
 if (mail("lightcom2001@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$phone ,"From: example2@mail.ru \r\n")){
 echo "Сообщение успешно отправлено";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
}
?>
</body>
</html>