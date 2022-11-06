import React from "react";

function Description({description}) {
  return (
    <>
      <div className="flow-root">
        <div className="-my-8 divide-y divide-gray-500">
          <details className="group py-4 mt-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">DESCRIPTION</h2>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
            {description}
            </p>
          </details>
          <details className="group py-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                SUBJECT, MEDIUM, STYLE, MATERIALS
              </h2>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
    </>
  );
}

export default Description;
