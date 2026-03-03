---
title: "Basic linear algebra algorithms (since C++26)"
source_path: "cpp/numeric/linalg"
category: "numeric"
since: "C++26"
---

Basic linear algebra algorithms are based on the dense Basic Linear Algebra Subroutines ([BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms)) which corresponds to a subset of the [BLAS Standard](http://www.netlib.org/blas/blast-forum/blas-report.pdf). These algorithms that access the elements of arrays view those elements through std::mdspan representing vector or matrix.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_linalg
202311L
(C++26)
Basic linear algebra algorithms (BLAS)

## Example
```cpp
#include <cassert>
#include <cstddef>
#include <execution>
#include <linalg>
#include <mdspan>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector<double> x_vec(42);
    std::ranges::iota(x_vec, 0.0);
 
    std::mdspan x(x_vec.data(), x_vec.size());
 
    // x[i] *= 2.0, executed sequentially
    std::linalg::scale(2.0, x);
 
    // x[i] *= 3.0, executed in parallel
    std::linalg::scale(std::execution::par_unseq, 3.0, x);
 
    for (std::size_t i{}; i != x.size(); ++i)
        assert(x[i] == 6.0 * static_cast<double>(i));
}
```
