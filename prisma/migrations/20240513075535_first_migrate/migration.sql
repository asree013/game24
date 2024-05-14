-- CreateTable
CREATE TABLE `SearchNumber` (
    `id` VARCHAR(191) NOT NULL,
    `key_value` VARCHAR(191) NOT NULL,
    `count_unit` VARCHAR(191) NOT NULL,
    `compite_result` BOOLEAN NOT NULL,
    `create_data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_data` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SearchNumber_key_value_key`(`key_value`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
