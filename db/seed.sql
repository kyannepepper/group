drop table if exists users;
drop table if exists groups;
drop table if exists group_requests;


create table users (
    id serial primary key,
    first_name varchar(200),
    last_name varchar(200),
    username varchar(200),
    password varchar(100),
    email varchar(200),
    money int (200)
);

create table groups (
    id serial primary key,
    name varchar(200),
    money int(200)
);

create table group_requests (
    id serial primary key,
    user_id int references users(id) on delete cascade,
    group_id int references groups(id) on delete cascade,
    accepted boolean
)