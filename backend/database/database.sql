CREATE DATABASE marketplace;
USE marketplace;

CREATE TABLE mercadorias(
cod             INTEGER        NOT NULL PRIMARY KEY,
name            VARCHAR (50)   NOT NULL,
type            VARCHAR (20)   NOT NULL,
amount          SMALLINT       NOT NULL, 
price           NUMERIC (15,2) NOT NULL,
optionMarket    TINYINT        NOT NULL
);