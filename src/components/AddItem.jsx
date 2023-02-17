import React, { useEffect, useState } from "react";
import { CgAdd, CgTrash } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

// Get the localstorage items
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const AddItem = () => {
  const [item, setItem] = useState("");
  const [itemlist, setItemList] = useState(getLocalItems());
  const [show, setShow] = useState(true);
  const [id, setId] = useState();
  // Adding the data to localstorage

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(itemlist));
  }, [itemlist]);

  // To add the item into the Todo List
  const additem = () => {
    if (item !== "") {
      setItemList([...itemlist, item]);
    } else {
      toast("Please Enter the Item!!", {
        position: "top-right",
        autoClose: 5000,
      });
    }
    setItem("");
  };

  // To delete a particular item from the Todo List
  const deleteitem = (id) => {
    const updateitems = itemlist.filter((curr, ind) => {
      return ind !== id;
    });
    setItemList(updateitems);
  };

  // show the changes on particular part
  const edited = () => {
    setShow(true);
    itemlist[id] = item;
    setItem("");
  };

  // Edit the item
  const edititem = (id) => {
    const edit = itemlist.filter((curr, ind) => {
      return id === ind;
    });
    setItem(edit);
    setShow(false);
    setId(id);
  };
  return (
    <>
      <div className="mb-3 mt-4 input-box form-control">
        <input
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          className="form-control add-input"
          type="text"
          placeholder="Add Items"
        />
        <div className="input-icon">
          {show ? <CgAdd onClick={additem} /> : <BiEdit onClick={edited} />}
        </div>
      </div>
      {itemlist.map((curr, ind) => {
        return (
          <div className="d-flex item-list" key={ind}>
            <p className="p-2 w-100">{curr}</p>
            <span
              className="p-2 flex-shrink-1"
              onClick={() => deleteitem(ind)}
              data-bs-toggle="tooltip"
              data-bs-title="Edit Item"
            >
              <CgTrash />
            </span>
            <span
              className="p-2 flex-shrink-1"
              onClick={() => edititem(ind)}
              data-bs-toggle="tooltip"
              data-bs-title="Add Item"
            >
              <BiEdit />
            </span>
          </div>
        );
      })}
      <button
        type="button"
        class="btn btn-outline-success"
        onClick={() => {
          setItemList([]);
        }}
      >
        Clear All
      </button>
    </>
  );
};

export default AddItem;
