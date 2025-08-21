@@ .. @@
                   <Link
                     to={`/blog/${relatedPost.id}`}
                     className="inline-flex items-center space-x-1 text-black font-medium hover:underline"
                   >
                     <span>Read more</span>
-                    <ArrowRight size={14} />
+                    <ArrowRight size={14} />
                   </Link>
                 </div>
               </article>
@@ .. @@
   );
 };

-export default Blog;
+export default BlogPost;