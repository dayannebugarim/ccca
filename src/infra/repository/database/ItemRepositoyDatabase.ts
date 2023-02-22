import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryDatavase implements ItemRepository {
    findById(idItem: number): Promise<Item | undefined> {
        // connection.query("SELECT * FROM ccca.item where id_item = $1", [idItem])
        throw new Error("Method not implemented.");
    }
    
}