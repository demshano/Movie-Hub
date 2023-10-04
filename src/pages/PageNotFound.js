import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pageNotFound from "../images/404_error.png";
import { Button } from "../components";
export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2 my-[-70px]">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-[#273c75] font-bold my-10 dark:text-white ">
            404, Oops!
          </p>
          <div className="max-w-sm">
            <motion.img
              src={pageNotFound}
              alt="404 error"
              className="pageNotFoundImg"
              initial={{
                y: -160,
              }}
              animate={{
                y: 50,
              }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            />
          </div>
        </div>

        <motion.div
          className="text-[#ec4899] mt-[-10px] flex "
          initial={{
            y: 260,
          }}
          animate={{
            y: 50,
          }}
          transition={{
            delay: 1.5,
            duration: 2,
            type: "spring",
          }}
        >
          <Link to="/">
            <Button>Back To Movie Hub</Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};
