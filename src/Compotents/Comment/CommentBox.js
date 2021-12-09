// import React, {useRef, useState} from "react";
// import "./CommentBox.css";
// import cn from "classnames";
// import useDynamicHeightField from "./useDynamicHeightField";
//
// const INITIAL_HEIGHT = 46;
//
// function CommentBox () {
//     const [isExpanded, setIsexpanded] = useState(false);
//     const [commentValue, setCommentValue] = useState("");
//
//     const outerHeight = useRef(INITIAL_HEIGHT);
//     const textRef = useRef(null);
//     const containerRef = useRef(null);
//
//     useDynamicHeightField(textRef, commentValue);
//
//     const onExpand = () => {
//         if(!isExpanded) {
//             outerHeight.current = containerRef.current.scrollHeight;
//             setIsexpanded(true);
//         }
//     }
//
//     const onChange = (e) => {
//         setCommentValue(e.target.value);
//     }
//
//     const onClose = () => {
//         setCommentValue("");
//         setIsexpanded(false);
//     }
//
//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log("Send form data to DB")
//     }
//
//     return(
//         <form
//             onSubmit={onSubmit}
//             ref={containerRef}
//             className={cn("comment-box", {
//                 expanded: isExpanded,
//                 collapsed: !isExpanded,
//                 modified: commentValue.length > 0,
//             })}
//             style = {{minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT}}
//         >
//             <div className="user-header">
//                 <div className="user-name-header">
//                     {/*<img src={eggs} alt="user"/>*/}
//                 <span>User Name</span>
//                 </div>
//             </div>
//
//             <label htmlFor="comment">
//                 What are your thoughts about this recipe?
//             </label>
//                 <textarea
//                     name="comment"
//                     id="comment"
//                     ref={textRef}
//                     onClick={onExpand}
//                     onChange={onChange}
//                     className="comment-field"
//                     placeholder="What are your thoughts?"
//                     value={commentValue}
//                 />
//             <div className="actions">
//                 <button type="button" className="cancel" onClick={onClose}>
//                     Cancel
//                 </button>
//                 <button type="submit" disabled={commentValue.length < 1}>
//                     Respond
//                 </button>
//             </div>
//         </form>
//     );
// }
//
// export default CommentBox;