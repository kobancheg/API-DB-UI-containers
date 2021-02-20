create TABLE person(
  id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	surname VARCHAR(50)
);
insert into person (name, surname) values ('Arturo', 'Vain');
insert into person (name, surname) values ('Howie', 'Hasluck');
insert into person (name, surname) values ('Farica', 'Ianinotti');
insert into person (name, surname) values ('Anissa', 'Benedyktowicz');
insert into person (name, surname) values ('Giraud', 'Stoffers');
insert into person (name, surname) values ('Torey', 'Hayfield');
insert into person (name, surname) values ('Susan', 'Tilbury');
insert into person (name, surname) values ('Liana', 'Riall');
insert into person (name, surname) values ('Bary', 'Kensy');
insert into person (name, surname) values ('Michal', 'Chasmor');

create TABLE post(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id)
);

insert into post (title, content) values ('Dead on Time', 'amet diam in magna bibendum imperdiet nullam orci pede venenatis');
insert into post (title, content) values ('Castle in the Desert (Charlie Chan in Castle in the Desert)', 'nunc proin at turpis a pede posuere nonummy integer non');
insert into post (title, content) values ('Deliverance', 'vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio');
insert into post (title, content) values ('Ascent of Money, The', 'eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio');
insert into post (title, content) values ('Taxing Woman, A (Marusa no onna)', 'sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis');
insert into post (title, content) values ('Storm Catcher', 'ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit');
insert into post (title, content) values ('Hoodlum', 'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis');
insert into post (title, content) values ('Kitchen Party', 'dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit');
insert into post (title, content) values ('Trance', 'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis');
insert into post (title, content) values ('Midsummer Night''s Party, A (Midsummer of Love, A) (Sommaren med Göran)', 'magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt');
