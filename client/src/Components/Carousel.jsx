import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousel({ item }) {
    return (
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
            style={{ height: '40vh',overflow: 'hidden' }}
        >
            <div className="carousel-inner" style={{ height: '100%' }}>
                <div className="carousel-item active">
                    <a href="#headset">
                        <img
                            src="https://www.reliancedigital.in/medias/v1-Apple-AirPods-Banner-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDFiL2hmMi8xMDI0Nzk3MTg5NzM3NC5qcGd8YzY1ZjE2ZTQ2MGFmMmVjMzE3MjQ3MDI3MjFiOTFjNjlhY2FkZTNjM2ExMWU3YTEwODczYWU5MTRhMWU4NTI5Nw"
                            className="d-block w-100 rounded-1"
                            style={{ height: '100%', objectFit: 'cover' }}
                            alt="..."
                        />
                    </a>
                </div>
                <div className="carousel-item">
                    <a href="#smartphone">
                        <img
                            src="https://www.reliancedigital.in/medias/Samsung-Galaxy-S25-Series-Carousel-Banner-23-01-2025-D-1-.jpg?context=bWFzdGVyfGltYWdlc3w5MDE4MHxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaGQ5LzEwMjUwNzg4NjAxODg2LmpwZ3w1NjUxODRiN2VkNmE2MzcyY2JjM2JmMDIxYjg3MjFkMzVlYWZmMWFlY2RhMWJjY2I4ZDM3YTY5MTJkYjA5YjUw"
                            className="d-block w-100 rounded-4"
                            style={{ height: '100%', objectFit: 'cover' }}
                            alt="..."
                        />
                    </a>
                </div>
                <div className="carousel-item">
                    <a href="#laptops">
                        <img
                            src="https://www.reliancedigital.in/medias/HPMC-Banner-Laptop-Hyb-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDcyNDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDY3L2hmZS8xMDI0OTgyMTk0NTg4Ni5qcGd8MmRiZTcxOTZiNTI2YmY5OGJjYjgzNTcxYzVjMTQxMjk5MWYyYmU3Y2RlZDk5NjU0NTJjNmNiMDM0ODdjODVlYg"
                            className="d-block w-100 rounded-4"
                            style={{ height: '100%', objectFit: 'cover' }}
                            alt="..."
                        />
                    </a>
                </div>
                <div className="carousel-item">
                    <a href="#smartwatch">
                        <img
                            src="https://www.reliancedigital.in/medias/Apple-Watch-Series10-1365x260-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTQ2MzB8aW1hZ2UvanBlZ3xpbWFnZXMvaGUyL2gwNi8xMDI0Nzk3MjAyODQ0Ni5qcGd8YjBhZWYwY2U5MGY0YTM1OTkzMDcxZWM4YzM0YzY3ZTM5YTVjMTQ1ZDczNWQ1MWQ1OTE5ZDg2NjY5MTQ3YjRjNg"
                            className="d-block w-100 rounded-4"
                            style={{ height: '100%', objectFit: 'cover' }}
                            alt="..."
                        />
                    </a>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
