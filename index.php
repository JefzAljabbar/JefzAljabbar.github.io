<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: users.php");
  }
?>

<?php include_once "header.php"; ?>
<body>
  <div class="wrapper">
    <section class="form signup">
      <header>Flexibility Moment Chats</header>
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
        <div class="error-text"></div>
        <div class="name-details">
          <div class="field input">
            <label>Nama Depan</label>
            <input type="text" name="fname" placeholder="Jef'z" required>
          </div>
          <div class="field input">
            <label>Nama Belakang</label>
            <input type="text" name="lname" placeholder="AlJabbar" required>
          </div>
        </div>
        <div class="field input">
          <label>Alamat Email</label>
          <input type="text" name="email" placeholder="misal32@gmail.com" required>
        </div>
        <div class="field input">
          <label>Kata Sandi</label>
          <input type="password" name="password" placeholder="kata sandinya" required>
          <i class="fas fa-eye"></i>
        </div>
        <div class="field image">
          <label>Pilih Photo Profilnya</label>
          <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required>
        </div>
        <div class="field button">
          <input type="submit" name="submit" value="Silahkan Masuk :)">
        </div>
      </form>
      <div class="link">Sudah punya akun? <a href="login.php">Masuk sini wey</a></div>
    </section>
  </div>
  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/signup.js"></script>

</body>
</html>
