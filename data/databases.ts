import { SiMysql, SiPostgresql, SiRedis, SiSqlite } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

export const databases = [
  {
    title: "MySQL",
    Icon: SiMysql,
    href: "https://www.mysql.com/",
  },
  {
    title: "SQLite3",
    Icon: SiSqlite,
    href: "https://www.sqlite.org/index.html",
  },
  {
    title: "MongoDB",
    Icon: TbBrandMongodb,
    href: "https://www.mongodb.com/",
  },
  {
    title: "PostgreSQL",
    Icon: SiPostgresql,
    href: "https://www.postgresql.org/",
  },
  {
    title: "Redis",
    Icon: SiRedis,
    href: "https://redis.io/",
  },
];
