# kubernetes-2-1

This little slice of heaven is from the [Kubernetes: Up and Running: Dive into the Future of Infrastructure](https://www.amazon.com/dp/1492046531/ref=cm_sw_em_r_mt_dp_U_djJjEbT2XQHWE) book (page 51-54).

> Run the following command to create the `simple-node` Docker image:
> ```sh
> docker build -t simple-node .
> ```
> When you want to run this image, you can do it with the following command. You can navigate to <http://localhost:3000> to access the program running in the container:
> ```sh
> docker run --rm -p 3000:3000 simple-node
> ```
