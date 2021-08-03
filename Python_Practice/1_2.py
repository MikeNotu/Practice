import cv2
import numpy as np

img = cv2.imread("chess.jpg")
gris = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gris, 75, 150)
lines = cv2.HoughLinesP(edges, 1, np.pi/180, 30, maxLineGap=250)

for line in lines:
   x1, y1, x2, y2 = line[0]
   cv2.line(img, (x1, y1), (x2, y2), (0, 0, 128), 1)
   
cv2.imwrite('LineasEdges.jpg',edges)
cv2.imwrite('LineasDetectadas.jpg',img)

cv2.imshow("LineasEdges", edges)
cv2.imshow("LineasDetectadas", img)

cv2.waitKey(0)
cv2.destroyAllWindows()


