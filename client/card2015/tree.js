import React from 'react'
import styleable from 'react-styleable'

import css from './tree.css'

function Tree(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.tree}></div>
      <div className={props.css.ornaments}>
        {props.children}
      </div>
      <svg width="100%" height="100%" viewBox="0 0 640 640">
          <defs>
              <clipPath id="treePath">
                <path d="M384.044,168.627c14.535,1.986 58.845,100.902 86.006,106.531c0,0 -48.569,9.952 -67.079,6.465c0,0 25.808,45.658 128.093,146.192c0,0 -46.994,6.602 -89.02,-2.727c0,0 28.312,82.976 90.175,137.339c0,0 -103.682,-18.155 -181.397,-16.509c-158.854,3.365 -205.198,15.518 -243.041,19.49c-0.007,-0.027 86.709,-49.292 107.102,-87.813l-88.689,8.685c69.519,-45.376 126.528,-124.751 126.528,-124.751c-43.603,1.867 -45.585,-6.002 -45.585,-6.002c68,-64.109 82.116,-79.989 85.585,-101.36l-39.423,-2.41c79.825,-76.263 105.198,-177.165 105.198,-177.165c0,0 14.737,52.793 63.792,86.9l-38.245,7.135Z"
                  fill="#ffffff" />
              </clipPath>
          </defs>
      </svg>
    </div>
  )
}

Tree.propTypes = {

}

export default styleable(css)(Tree)
