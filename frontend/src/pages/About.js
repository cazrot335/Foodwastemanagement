
import { useNavigate } from "react-router-dom";
const About = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Specify the path you want to navigate to
        navigate("/");
      };
    

    return (
      <div
        style={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "179px 151px 327px 240px",
          boxSizing: "border-box",
          gap: "75px",
          letterSpacing: "normal",
          textAlign: "left",
          fontSize: "22px",
          color: "#fff",
          fontFamily: "Gilroy",
        }}
      >
        <img
          style={{
            height: "1001px",
            width: "504px",
            position: "absolute",
            margin: "0",
            bottom: "-15px",
            left: "-15px",
            objectFit: "cover",
          }}
          loading="eager"
          alt=""
          src="/image-7@2x.png"
        />
        <img
          style={{
            height: "562px",
            width: "166px",
            position: "absolute",
            margin: "0",
            right: "0px",
            bottom: "-62px",
            objectFit: "contain",
          }}
          loading="eager"
          alt=""
          src="/image-16@2x.png"
        />
        <div
          style={{
            height: "31px",
            position: "relative",
            lineHeight: "101%",
            fontWeight: "600",
            display: "none",
            zIndex: "2",
          }}
        >
          Education
        </div>
        <div
          style={{
            width: "644px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 19px",
            boxSizing: "border-box",
            minWidth: "644px",
            maxWidth: "100%",
            fontSize: "79px",
            color: "#071837",
            fontFamily: "'Germania One'",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "25px",
            }}
          >
            <h1
              style={{
                margin: "0",
                position: "relative",
                fontSize: "inherit",
                lineHeight: "101%",
                fontWeight: "400",
                fontFamily: "inherit",
                zIndex: "1",
              }}
            >
              ABOUT US
            </h1>
            <h3
              style={{
                margin: "0",
                alignSelf: "stretch",
                height: "364px",
                position: "relative",
                fontSize: "35px",
                lineHeight: "52px",
                fontWeight: "400",
                fontFamily: "Urbanist",
                color: "#4e4e4e",
                display: "inline-block",
                flexShrink: "0",
                zIndex: "1",
              }}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}</h3>
          </div>
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "12px",
            minWidth: "526px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              gap: "15px",
              minWidth: "348px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "13px",
              }}
            >
              <div
                style={{
                  flex: "0.8953",
                  borderRadius: "5px",
                  backgroundColor: "#071837",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "46px 46px 55px",
                  boxSizing: "border-box",
                  gap: "31px",
                  minWidth: "197px",
                  zIndex: "1",
                }}
              >
                <div
                  style={{
                    width: "263px",
                    height: "276px",
                    position: "relative",
                    borderRadius: "5px",
                    backgroundColor: "#071837",
                    display: "none",
                  }}
                />
                <img
                  style={{
                    width: "107px",
                    height: "113px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    zIndex: "2",
                  }}
                  loading="eager"
                  alt=""
                  src="/frame.svg"
                />
                <div
                  style={{
                    height: "31px",
                    position: "relative",
                    lineHeight: "101%",
                    fontWeight: "600",
                    display: "inline-block",
                    flexShrink: "0",
                    zIndex: "2",
                  }}
                >
                  Education
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  borderRadius: "5px",
                  backgroundColor: "#071837",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "44px 36px 36px",
                  boxSizing: "border-box",
                  gap: "52px",
                  minWidth: "194px",
                }}
              >
                <div
                  style={{
                    width: "259px",
                    height: "276px",
                    position: "relative",
                    borderRadius: "5px",
                    backgroundColor: "#071837",
                    display: "none",
                  }}
                />
                <img
                  style={{
                    width: "109px",
                    height: "113px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                  loading="eager"
                  alt=""
                  src="/frame-1.svg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0px 32px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      height: "31px",
                      position: "relative",
                      lineHeight: "101%",
                      fontWeight: "600",
                      display: "inline-block",
                      zIndex: "1",
                    }}
                  >
                    Medical
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "12px",
              }}
            >
              <div
                style={{
                  flex: "0.4756",
                  borderRadius: "5px",
                  backgroundColor: "#071837",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "35px 77px 40px 79px",
                  boxSizing: "border-box",
                  gap: "56px",
                  minWidth: "197px",
                }}
              >
                <div
                  style={{
                    width: "263px",
                    height: "276px",
                    position: "relative",
                    borderRadius: "5px",
                    backgroundColor: "#071837",
                    display: "none",
                  }}
                />
                <img
                  style={{
                    alignSelf: "stretch",
                    height: "113px",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                  loading="eager"
                  alt=""
                  src="/frame-2.svg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0px 34px 0px 9px",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      position: "relative",
                      lineHeight: "101%",
                      fontWeight: "600",
                      display: "inline-block",
                      zIndex: "1",
                    }}
                  >
                    Sports
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  borderRadius: "5px",
                  backgroundColor: "#071837",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "35px 3px 40px 35px",
                  boxSizing: "border-box",
                  gap: "56px",
                  minWidth: "194px",
                }}
              >
                <div
                  style={{
                    width: "259px",
                    height: "276px",
                    position: "relative",
                    borderRadius: "5px",
                    backgroundColor: "#071837",
                    display: "none",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0px 32px 0px 0px",
                  }}
                >
                  <img
                    style={{
                      height: "113px",
                      width: "109px",
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                    loading="eager"
                    alt=""
                    src="/frame-3.svg"
                  />
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: "32px",
                    position: "relative",
                    lineHeight: "101%",
                    fontWeight: "600",
                    display: "inline-block",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                >
                  Natural Disaster
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "263px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "15px",
              minWidth: "263px",
            }}
          >
            <div
              style={{
                borderRadius: "5px",
                backgroundColor: "#071837",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "44px 77px 36px 78px",
                gap: "52px",
              }}
            >
              <div
                style={{
                  width: "263px",
                  height: "276px",
                  position: "relative",
                  borderRadius: "5px",
                  backgroundColor: "#071837",
                  display: "none",
                }}
              />
              <img
                style={{
                  width: "108px",
                  height: "113px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                  zIndex: "1",
                }}
                loading="eager"
                alt=""
                src="/frame-4.svg"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 40px 0px 13px",
                }}
              >
                <div
                  style={{
                    height: "31px",
                    position: "relative",
                    lineHeight: "101%",
                    fontWeight: "600",
                    display: "inline-block",
                    zIndex: "1",
                  }}
                >
                  Blood
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "5px",
                backgroundColor: "#071837",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "35px 62px 40px 64px",
                gap: "56px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  width: "263px",
                  height: "276px",
                  position: "relative",
                  borderRadius: "5px",
                  backgroundColor: "#071837",
                  display: "none",
                }}
              />
              <img
                style={{
                  width: "108px",
                  height: "113px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                  zIndex: "2",
                }}
                loading="eager"
                alt=""
                src="/frame-5.svg"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  height: "32px",
                  position: "relative",
                  lineHeight: "101%",
                  fontWeight: "600",
                  display: "inline-block",
                  flexShrink: "0",
                  zIndex: "2",
                }}
              >
                Covid - 19
              </div>
              
            </div>
            <button style={{
        backgroundColor: "white",
        color: "black", // or choose a color that contrasts well with white
        padding: "10px 15px", // Adjust padding as needed
        border: "none", // Remove border if not needed
        borderRadius: "5px", // Adjust border-radius as needed
        cursor: "pointer", // Show pointer cursor on hover
      }}
      onClick={handleButtonClick}>main</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  
