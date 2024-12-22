<?php 
  session_start();
  include_once "php/config.php";
  if(!isset($_SESSION['unique_id'])){
    header("location: login.php");
  }
?>
<?php include_once "header.php"; ?>
<body>
  <div class="wrapperuser">
      <header>
        <div class="content">
          <?php 
            $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$_SESSION['unique_id']}");
            if(mysqli_num_rows($sql) > 0){
              $row = mysqli_fetch_assoc($sql);
            }
          ?>
          <div class="details">
            <span><?php echo $row['fname']. " " . $row['lname'] ?></span>
            <p class="status"><?php echo $row['status']; ?></p>
          </div>
        </div>
        <img src="php/images/<?php echo $row['img']; ?>" alt="">
      </header>
      <section class="users">
      <div class="search">
        <span class="text">Friends</span>
        <input type="text" placeholder="Cari namanya. . .">
        <button><i class="fas fa-search"></i></button>
      </div>
      <div class="users-list">
        
        </div>
      </section>
      <a href="php/logout.php?logout_id=<?php echo $row['unique_id']; ?>" class="logout">Logout</a>
    </div>
    
    <script src="javascript/users.js"></script>

</body>
</html>
