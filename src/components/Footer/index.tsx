import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {SHU_LINK} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '上海大学机自学院智能设计实验室出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Shanghai University',
          title: 'SHU',
          href: SHU_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/polarisronx',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'SMEA',
          href: 'https://auto.shu.edu.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
