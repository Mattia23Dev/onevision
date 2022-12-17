import { useRef, useState } from "react";
import MenuItem from "./MenuItem";
import useOnClickOutside from "../../helpers/clickOutside";
import { deletePost, savePost } from "../../functions/post";
import { saveAs } from "file-saver";

export default function PostMenu({
  postUserId,
  userId,
  imagesLength,
  setShowMenu,
  token,
  postId,
  checkSaved,
  setCheckSaved,
  images,
  postRef,
}) {
  const [test, setTest] = useState(postUserId === userId ? true : false);
  const menu = useRef(null);
  useOnClickOutside(menu, () => setShowMenu(false));
  const saveHandler = async () => {
    savePost(postId, token);
    if (checkSaved) {
      setCheckSaved(false);
    } else {
      setCheckSaved(true);
    }
  };
  const downloadImages = async () => {
    images.map((img) => {
      saveAs(img.url, "image.jpg");
    });
  };
  const deleteHandler = async () => {
    const res = await deletePost(postId, token);
    if (res.status === "ok") {
      postRef.current.remove();
    }
  };
  return (
    <ul className="post_menu" ref={menu}>
      <div onClick={() => saveHandler()}>
        {checkSaved ? (
          <MenuItem
            icon="save_icon"
            title="Rimuovi Post"
            subtitle="Rimuovilo dai post salvati"
          />
        ) : (
          <MenuItem
            icon="save_icon"
            title="Salva Post"
            subtitle="Aggiungilo ai post salvati"
          />
        )}
      </div>
      {imagesLength && (
        <div onClick={() => downloadImages()}>
          <MenuItem icon="download_icon" title="Download Immagine" />
        </div>
      )}
      {test && (
        <div onClick={() => deleteHandler()}>
          <MenuItem
            icon="trash_icon"
            title="Elimina"
            subtitle="Sposta nel cestino"
          />
        </div>
      )}
      {!test && <div className="line"></div>}
      {!test && (
        <a href='https://wa.me/3313869850' target='_blank' >
        <MenuItem
          img="../../../icons/report.png"
          title="Segnala"
          subtitle="Segnala se lo trovi fuori luogo"
        />
        </a>
      )}
    </ul>
  );
}
