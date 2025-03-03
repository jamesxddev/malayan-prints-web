import { IconBrandInstagram, IconBrandYoutube, IconBrandFacebook } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './FooterLink.module.css';

import logo from '../../assets/images/malayan-prints-logo-white.png';

const data = [
  {
    title: 'About Us',
    links: [
      { label: 'The company', link: '#' },
      { label: 'Sustainability', link: '#' },
      { label: 'Why choose us', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Design Services', link: '#' },
      { label: 'Create your print file', link: '#' },
    ],
  },
  {
    title: 'Help and Contact',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Facebook', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'Your Orders', link: '#' },
    ],
  },
];

export function FooterLink() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" className={classes.logo}/>
          <Text size="xs" c="dimmed" className={classes.description}>
            Malayan Prints is here to help every step of the way
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 Malayan Prints. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}