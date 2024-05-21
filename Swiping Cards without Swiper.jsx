const RelatedCourseMobile = ({ relatedCourse }) => {
    const router = useRouter();
    return (
      <>
        <div className="flex  flex-row overflow-x-scroll overflow-y-hidden row-posters gap-[20px]   w-[100%] mx-auto  2xl:justify-center  mt-[32px]">
          {relatedCourse?.map((geData) => (
            <div key={geData.id} className="inline-block">
              <div className=" w-[200px]  h-[264px] bg-[#F7F5FA]  relative shadow-lg overflow-hidden rounded-[12px]">
                <div className="relative">
                  <Image
                    width={1000}
                    height={1001}
                    className="w-full h-[112px]"
                    src="https://images.pexels.com/photos/1772973/pexels-photo-1772973.png?auto=compress&cs=tinysrgb&w=600"
                    alt="course"
                  />
                  <div className="absolute top-0 left-0 p-2 flex justify-between w-full text-[8px] font-semibold">
                    {
                      <div className="flex justify-between w-full flex-wrap gap-2">
                        <p
                          className={`bg-[#2A282F] ${openSans.className} text-white px-[4px] py-[2px] rounded-full  flex items-center justify-center gap-[2px] `}
                        >
                          {/* <Image
                                src={certificateIcon}
                                alt="certificateIcon"
                                className="h-[12px] w-[12px] mt-[2px] "
                              /> */}
                          {geData.catname}
                        </p>
  
                        {geData.tags?.map((tag) => {
                          return (
                            <p
                              key={tag.id}
                              className={`bg-[#2A282F] ${openSans.className} text-white px-[4px] py-[2px] rounded-full  flex items-center justify-center gap-[2px] `}
                            >
                              <Image
                                src={certificateIcon}
                                alt="certificateIcon"
                                className="h-[12px] w-[12px] mt-[2px] "
                              />
                              {tag.tag_name}
                            </p>
                          );
                        })}
                      </div>
                    }
                  </div>
                </div>
  
                <div className="pl-[8px] pr-[10px] h-[152px] ">
                  <p
                    className={`text-[10px] mt-[8px]  font-semibold text-[#2D2B73] ${openSans.className}`}
                  >
                    {/* {geData.subtitle} */}
                    {geData.subcatName}
                  </p>
                  <h5 className="text-[#2A282F] text-[14px] mt-[4px] font-bold leading-[17px]">
                    {" "}
                    {geData.subtitle}
                  </h5>
                  <p
                    className={`text-[10px] line-clamp-2 overflow-hidden text-[#625F68] mt-[6px] ${openSans.className}`}
                  >
                    {geData.description}
                  </p>
                  <div className="mt-[8px] flex items-center text-[8px] font-medium text-[#000000]">
                    <React.Fragment>
                      <Image
                        src={calender2}
                        alt="calender"
                        className="pr-1 w-[10px] h-[10px]"
                      />
                      {geData.duration} {geData.durationin} &nbsp;&nbsp;&nbsp;
                    </React.Fragment>
  
                    {/* {geData.Internship && (
                      <React.Fragment>
                        <Image src={handShake} alt="handShake" className="pr-1" />
                        {geData.Internship}
                      </React.Fragment>
                    )} */}
                    <React.Fragment>
                      <Image
                        src={handShake2}
                        alt="handShake"
                        className="pr-1 w-[10px] h-[10px]"
                      />
                      Placement & internship
                    </React.Fragment>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full  pt-0  mt-[12px]">
                  <div className="flex justify-between">
                    {/* <button className="syllabysCard w-full">Download Syllabus</button> */}
                    {/* <button onClick={() => router.push(`/course/${geData.id}`)} className="courses ">Course Details</button> */}
                    <button
                      onClick={() => router.push(`/courses/${course.catUrlName}/${geData.url_name}`)}
                      style={{
                        background:
                          "linear-gradient(to bottom right, #8B396E, #38346C) ",
                      }}
                      className=" w-full text-[10px] font-bold pt-[7px] pb-[5px] text-white cursor-pointer"
                    >
                      View course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };