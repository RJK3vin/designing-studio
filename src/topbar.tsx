import { Menu, Button, Text, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';


function Demo() {
  return (
    <>
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Instagram</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<p style={{ width: rem(14), height: rem(14) }}></p>}
          rightSection={
            <Text size="xs" c="dimmed">
              <img src="https://www.pngkey.com/png/detail/300-3002610_two-people-icon-transparent.png" style = {{ width: 50, height: 50 }}></img> 

            </Text>
          }
        >
            Following
        </Menu.Item>
        <Menu.Item
          leftSection={<p style={{ width: rem(14), height: rem(14) }}></p>}
          rightSection={
            <Text size="xs" c="dimmed">
              <img src="https://cdn.icon-icons.com/icons2/1660/PNG/512/3844463-famous-favorite-featured-star-super_110327.png" style = {{ width: 50, height: 50, float: "right"}}></img> 

            </Text>
          }
        >
            Favorites
        </Menu.Item>


      </Menu.Dropdown>
    </Menu>
        <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number" style = {{ float: "right" }}>
        <img src="https://st2.depositphotos.com/38069286/42112/v/450/depositphotos_421121214-stock-illustration-direct-messages-button-icon-isolated.jpg" style = {{ width: 70, height: 50, float: "right" }}></img>
        </ActionIcon>    
        <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number" style = {{ float: "right" }}>
        <IconHeart style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>    
    </>
  );
}

export default Demo;

