<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180428134527 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE restaurant ADD restaurantType VARCHAR(70) NOT NULL, ADD email VARCHAR(255) NOT NULL, DROP fbId, DROP address, DROP created_at, DROP updated_at, CHANGE contactphone phoneNumber VARCHAR(20) NOT NULL, CHANGE fblink webPage VARCHAR(2083) NOT NULL');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE restaurant ADD fbId INT NOT NULL, ADD address VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, ADD created_at DATETIME NOT NULL, ADD updated_at DATETIME NOT NULL, DROP restaurantType, DROP email, CHANGE phonenumber contactPhone VARCHAR(20) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE webpage fbLink VARCHAR(2083) NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
