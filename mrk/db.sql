#创建注册信息表
create table mrk(
  id INT PRIMARY KEY AUTO_INCREMENT, 
  uname VARCHAR(20),
  phone VARCHAR(16),
  mrk_address VARCHAR(50),
  mrk_message VARCHAR(300)
)DEFAULT CHARSET `UTF8`;
INSERT INTO mrk VALUES(null,'tom','15116997874','123','的哈数据库很大声');
INSERT INTO mrk VALUES(null,'tom','15116997873','123dd','的哈数据库很大声2');
INSERT INTO mrk VALUES(null,'tom','15116997855','12311','的哈数据库很大声3');
INSERT INTO mrk VALUES(null,'tom','15116997834','123dsa','的哈数据库很大声4');
INSERT INTO mrk VALUES(null,'tom','15116997864','12mm3','的哈数据库很大声6');

