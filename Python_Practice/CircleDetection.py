# Tener cuidado con si se usa un archivo png o jpg, puede afectar el resultado obtenido.

import cv2
import numpy as np

img = cv2.imread('Rueda.png')
src = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

edges = cv2.Canny(src,100,200,apertureSize = 3)
minLineLength = 50
maxLineGap = 5
lines = cv2.HoughLinesP(edges,1,np.pi/160,155,minLineLength,maxLineGap)

src = cv2.medianBlur(src,5)
src = cv2.GaussianBlur(src,(5,5),0)
src = cv2.medianBlur(src,5)

circles = cv2.HoughCircles(src,cv2.HOUGH_GRADIENT, 1,200,param1=30,param2=45,minRadius=0,maxRadius=0)

circles = np.uint16(np.around(circles))

for i in circles[0,:]:
    
    cv2.circle(img,(i[0], i[1]),i[2], (0,0,255),2)
    
    cv2.circle(img, (i[0],i[1]),2,(0,255,0),3)

cv2.imshow('Circulos Detectados',img)
print("Cantidad de ejes en la rueda: "+str(len(lines)))
cv2.waitKey(0)
        
        

