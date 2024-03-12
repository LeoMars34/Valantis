import { useEffect, useState } from 'react';
import {
    filterBrandItems,
    filterPriceItems,
    filterProduct,
    getFields,
    getIdsFour,
    getIdsOne,
    getIdsThree,
    getIdsTwo,
    getItems,
} from './Api';

export function Table() {
    const [items, setItems] = useState([]);
    const [ids, setIds] = useState([]);
    const [fields, setFields] = useState([]);

    const expect = (val) => {
        if (val === 5) {
            return { true: true };
        } else {
            return { true: false };
        }
    };
    console.log(expect(5));

    useEffect(() => {
        getIdsOne().then((dataId) => {
            getItems(dataId.result).then((dataItems) => {
                setItems(dataItems.result);
            });
            setIds(dataId);
        });
    }, []);

    useEffect(() => {
        getFields().then((dataFields) => {
            setFields(dataFields.result);
        });
    }, []);
    let uniqBrand = [];
    if (fields.length > 0) {
        let brand = new Set(fields);
        uniqBrand = Array.from(brand);
        uniqBrand.shift();
    }

    function filterBrand() {
        let brandName = document.getElementById('selectBrand').value;
        filterBrandItems(brandName).then((dataBrand) => {
            getItems(dataBrand.result).then((dataItems) => {
                setItems(dataItems.result);
            });
        });
    }
    function filterPrice() {
        let priceItem = Number(document.getElementById('priceItem').value);
        filterPriceItems(priceItem).then((dataPrice) => {
            getItems(dataPrice.result).then((dataItems) => {
                setItems(dataItems.result);
            });
        });
    }
    function filterItemName() {
        let productName = document.getElementById('productName').value;
        filterProduct(productName).then((dataProductName) => {
            getItems(dataProductName.result).then((dataItems) => {
                setItems(dataItems.result);
            });
        });
    }
    function paginationOne() {
        getIdsOne().then((dataId) => {
            getItems(dataId.result).then((dataItems) => {
                setItems(dataItems.result);
            });
        });
    }
    function paginationTwo() {
        getIdsTwo().then((dataId) => {
            getItems(dataId.result).then((dataItems) => {
                setItems(dataItems.result);
            });
        });
    }
    function paginationThree() {
        getIdsThree().then((dataId) => {
            getItems(dataId.result).then((dataItems) => {
                setItems(dataItems.result);
            });
        });
    }
    function paginationFour() {
        getIdsFour().then((dataId) => {
            getItems(dataId.result).then((dataItems) => {
                setItems(dataItems.result);
            });
        });
    }

    return (
        <div className="container">
            <div>
                <input
                    id="productName"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            filterItemName();
                        }
                    }}
                    type="text"
                    placeholder="Название"
                />
                <input
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            filterPrice();
                        }
                    }}
                    type="number"
                    placeholder="Цена"
                    id="priceItem"
                />
                <select onChange={filterBrand} name="" id="selectBrand">
                    <option hidden>Бренд</option>
                    {uniqBrand.map((i) => (
                        <option>{i}</option>
                    ))}
                </select>
            </div>
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>Бренд</th>
                            <th>Id</th>
                            <th>Цена</th>
                            <th>Продукт</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((i) => (
                            <tr key={i.index}>
                                <th>{i.brand}</th>
                                <th>{i.id}</th>
                                <th>{i.price}</th>
                                <th>{i.product}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={paginationOne}>1</button>
                <button onClick={paginationTwo}>2</button>
                <button onClick={paginationThree}>3</button>
                <button onClick={paginationFour}>4</button>
            </div>
        </div>
    );
}
