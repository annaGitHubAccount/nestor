CREATE SEQUENCE produkt_stammdaten__seq
    MAXVALUE 99999999999999
    START WITH 100
    INCREMENT BY 1;

create table if not exists Produkt_Stammdaten
(
  id long primary key auto_increment not null,
  symbol    varchar(3) not null,
  name     varchar(50)  not null,
  preis    decimal(20)  not null,
  is_aktiv   boolean not null,
  PRODUKT_ART varchar(50),
  CONSTRAINT Produkt_Stammdaten_PK PRIMARY KEY(ID)
);


