import S from './Style.Puzzle';
import usePuzzle from './usePuzzle';

export default function Puzzle() {
	const { puzzle, dragEnter, dragStart, drop, scale } = usePuzzle();

	return (
		<S.Container>
			<S.Position>
				{puzzle.map(({ num, url }, idx) => (
					<S.PuzzleBox
						key={idx}
						gridArea={idx}
						hoverScale={scale}
						onDragStart={() => dragStart(idx)}
						onDragEnter={() => dragEnter(idx)}
						onDragOver={e => e.preventDefault()}
						onDragEnd={drop}
						draggable>
						<S.PuzzleImg
							src={process.env.PUBLIC_URL + url}
							alt={`${num}조각`}
						/>
					</S.PuzzleBox>
				))}
			</S.Position>
		</S.Container>
	);
}
