<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: users.php");
  }
?>

<?php include_once "header.php"; ?>
<body>
  <div class="wrapper">
    <section class="form login">
      <header>Flexibility Moment Chats</header>
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
        <div class="error-text"></div>
        <div class="field input">
          <label>Alamat Email</label>
          <input type="text" name="email" placeholder="emailnya@gmail.com" required>
        </div>
        <div class="field input">
          <label>Kata Sandi</label>
          <input type="password" name="password" placeholder="kata sandinya" required>
          <i class="fas fa-eye"></i>
        </div>
        <div class="field button">
          <input type="submit" name="submit" value="Silahkan Masuk">
        </div>
      </form>
      <div class="link">Belum daftar kah? <a href="index.php">Daftar lah :)</a></div>
    </section>
  </div>
  
  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/login.js"></script>

</body>
</html>
