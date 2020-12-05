import React, { useEffect } from "react";
import { useAuth } from "./../hooks/use-auth";
import PeopleAPI from "./../apis/peopleAPI";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Typography, Divider } from "antd";
import { Layout, Menu, Row, Col } from "antd";
import { Pagination, Image } from "antd";

const { Footer, Sider, Content } = Layout;
import Header from "./../components/Header";
const { Title } = Typography;

export default function Home() {
  useEffect(() => {
    PeopleAPI.get();
  }, []);
  const { setUser } = useAuth();

  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: "https://ant.design",
      title: `ant design part ${i}`,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description: "20 mét vuông 5PN",
      content: "15 triệu/tháng",
    });
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <>
      <Layout>
        <Header />

        <Content style={{ marginTop: "50px" }}>
          <Row>
            <Col span={12} offset={6}>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 5,
                }}
                dataSource={listData}
                renderItem={(item) => (
                  <List.Item
                    style={{ backgroundColor: "white" }}
                    key={item.title}
                    actions={[
                      <IconText
                        icon={StarOutlined}
                        text="Môi giới"
                        key="list-vertical-star-o"
                      />,
                      <IconText
                        icon={LikeOutlined}
                        text="5 phút trước"
                        key="list-vertical-like-o"
                      />,
                      <IconText
                        icon={MessageOutlined}
                        text="Quận Bình Thạnh"
                        key="list-vertical-message"
                      />,
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://nhadat24h.com/uploads/bds/201902/22/877833_165037_vhc%201.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Content>

        <Footer>
          <Row>
            <Col span={12} offset={6}>
              CÔNG TY TNHH CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point
              Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh
              <br />
              Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch
              và Đầu Tư TPHCM cấp ngày 11/01/2013
              <br />
              Email: trogiup@chotot.vn - Đường dây nóng: (028)38664041
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
}
