// JS101
// Easy 3
// Right Triangles

function triangle(width) {
  for (let i = 1; i <= width; i++) {
    console.log('*'.repeat(i).padStart(width));
  }
}