<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180429162457 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE review (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, rating INT NOT NULL, comment LONGTEXT NOT NULL, date DATE NOT NULL, restaurantId INT DEFAULT NULL, INDEX IDX_794381C681DAF313 (restaurantId), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE restaurant (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, logo VARCHAR(2083) NOT NULL, restaurantType VARCHAR(70) NOT NULL, phoneNumber VARCHAR(20) NOT NULL, webPage VARCHAR(2083) NOT NULL, email VARCHAR(255) NOT NULL, latitude NUMERIC(10, 8) NOT NULL, longitude NUMERIC(11, 8) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE meal (id INT AUTO_INCREMENT NOT NULL, foodName VARCHAR(50) NOT NULL, price NUMERIC(3, 2) NOT NULL, image VARCHAR(2083) NOT NULL, date DATE NOT NULL, restaurantId INT DEFAULT NULL, INDEX IDX_9EF68E9C81DAF313 (restaurantId), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C681DAF313 FOREIGN KEY (restaurantId) REFERENCES restaurant (id)');
        $this->addSql('ALTER TABLE meal ADD CONSTRAINT FK_9EF68E9C81DAF313 FOREIGN KEY (restaurantId) REFERENCES restaurant (id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C681DAF313');
        $this->addSql('ALTER TABLE meal DROP FOREIGN KEY FK_9EF68E9C81DAF313');
        $this->addSql('DROP TABLE review');
        $this->addSql('DROP TABLE restaurant');
        $this->addSql('DROP TABLE meal');
    }
}
