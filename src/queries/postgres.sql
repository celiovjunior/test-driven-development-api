--create table
DROP TABLE IF EXISTS tb_employees;
CREATE TABLE tb_employees (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL
);

--create
INSERT INTO tb_employees (name, role)
VALUES
    ('celio', 'chef'),
    ('anna', 'waitress'),
    ('laura', 'duty manager'),
    ('carl', 'kitchen hand');


--read
SELECT * FROM tb_employees;

SELECT * FROM tb_employees WHERE name='celio';

--update
UPDATE tb_employees
    SET name='celio, jr', role='chef update'
    WHERE id=1;

--delete
DELETE FROM tb_employees WHERE id=2;