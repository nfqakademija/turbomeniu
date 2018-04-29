<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180429155810 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE review ADD restaurantId INT DEFAULT NULL');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C681DAF313 FOREIGN KEY (restaurantId) REFERENCES restaurant (id)');
        $this->addSql('CREATE INDEX IDX_794381C681DAF313 ON review (restaurantId)');
        $this->addSql('ALTER TABLE meal ADD restaurantId INT DEFAULT NULL');
        $this->addSql('ALTER TABLE meal ADD CONSTRAINT FK_9EF68E9C81DAF313 FOREIGN KEY (restaurantId) REFERENCES restaurant (id)');
        $this->addSql('CREATE INDEX IDX_9EF68E9C81DAF313 ON meal (restaurantId)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE meal DROP FOREIGN KEY FK_9EF68E9C81DAF313');
        $this->addSql('DROP INDEX IDX_9EF68E9C81DAF313 ON meal');
        $this->addSql('ALTER TABLE meal DROP restaurantId');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C681DAF313');
        $this->addSql('DROP INDEX IDX_794381C681DAF313 ON review');
        $this->addSql('ALTER TABLE review DROP restaurantId');
    }
}
