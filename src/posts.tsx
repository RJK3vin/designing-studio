import { ActionIcon, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { Menu } from '@mantine/core';
import {
    IconMenu2
  } from '@tabler/icons-react';

function Post() {
  return (
    <>
    <Menu shadow="md" width={200} >
        <Menu.Target>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <IconMenu2></IconMenu2>
            </div>
        </Menu.Target>
        <Menu.Dropdown style={{ position: 'absolute', right: 0, left: 'auto' }}>
            <Menu.Item>
            <img src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png" style = {{ width: 15, height: 15 }}></img>
            Save
            </Menu.Item>
            <Menu.Item>
                <img src="https://static.vecteezy.com/system/resources/previews/027/501/741/non_2x/simple-qr-code-icon-the-icon-can-be-used-for-websites-print-templates-presentation-templates-illustrations-etc-free-vector.jpg" style = {{ width: 25, height: 25 }}></img>
            QR code
            </Menu.Item>
            <Menu.Item>
                <img src="https://cdn.icon-icons.com/icons2/1660/PNG/512/3844463-famous-favorite-featured-star-super_110327.png"style = {{ width: 20, height: 20}}></img>
            Add to favorites
            </Menu.Item>
            <Menu.Item>
                <img src = "https://static.thenounproject.com/png/1408909-200.png"style = {{ height: 45, width: 45 }}></img>
            Unfollow
            </Menu.Item>
            <Menu.Item>
                <img src = "https://static.vecteezy.com/system/resources/previews/026/631/788/non_2x/account-setting-icon-symbol-design-illustration-vector.jpg" style = {{ width: 20, height: 20 }}></img>
            About this account
            </Menu.Item>
            <Menu.Item>
                <img src = "https://static.vecteezy.com/system/resources/previews/026/486/838/non_2x/cc-closed-captioning-symbol-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector.jpg" style = {{ width: 30, height: 30}}></img>
            Captions and translations
            </Menu.Item>
            <Menu.Item>
                <img src="https://cdn.icon-icons.com/icons2/2406/PNG/512/info_circle_icon_145969.png"style = {{ width: 25, height: 25 }}></img>
            Why you're seeing this post
            </Menu.Item>
            <Menu.Item>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_rv_iH2bELGw9IFcGkAKsKHs1Sr1gn_7uQ&s"style = {{ width: 15, height: 15 }}></img>
            Hide
            </Menu.Item>
            <Menu.Item>
                <img src="https://t4.ftcdn.net/jpg/05/20/17/09/360_F_520170961_lYnKV9gq6BLDxtfL5YxIFbcUIJCZlJSc.jpg"style={{ height: 30, width: 30 }}></img>
            Report
            </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    <h1>433</h1>
    <div style={{ display: 'flex', width: '100%' }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzw_Ti47ovNmMbRwz3HaY7hDhHFeAmER6kw&s"
        alt="Description"
        style={{ width: '100%', maxHeight: '3000px', height: 'auto', objectFit: 'cover' }}
        >
    </img>
    </div>
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>
      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHV1tLj4KUZ_DW5KLcipQMT7zu_w3RlT4fw&s" style = {{ width: 15, height: 15}}></img>
      </ActionIcon>
      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhRu6LXb_XJgyO23-iOSSaMgi5mYyphh7zQ&s" style = {{ width: 15, height: 15}}></img>
      </ActionIcon>
    </ActionIcon.Group>
    <ActionIcon variant="default" size="lg" aria-label="Likes" style = {{ float: "right" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png" style = {{ width: 25, height: 25 }}></img>
    </ActionIcon>
    <p>10000000 Likes</p>
    <p>433 Messi the goat</p>
    <p>View all 1,050 comments</p>
    </>
  );
}

export default Post;