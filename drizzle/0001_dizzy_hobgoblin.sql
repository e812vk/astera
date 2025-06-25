CREATE TABLE `employees` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`surname` text NOT NULL,
	`position` text NOT NULL,
	`info` text,
	`image` text NOT NULL
);
