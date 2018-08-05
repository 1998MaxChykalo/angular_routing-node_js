const findById = (id = 0, dataSource = []) => {
    return dataSource.find((element) => element.id === id);
};

const removeItem = (id = 0, dataSource = []) => {
    const itemIndex = dataSource.findIndex((item) => item.id == id);
    dataSource.splice(itemIndex, 1);
}

module.exports = { findById, removeItem };